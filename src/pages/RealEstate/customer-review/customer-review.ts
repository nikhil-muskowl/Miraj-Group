import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactValidator } from '../../../validators/contact';
import { CustomerReviewProvider } from '../../../providers/customer-review/customer-review';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ContactProvider } from '../../../providers/contact/contact';
import { ToastProvider } from '../../../providers/toast/toast';
import { LoaderProvider } from '../../../providers/loader/loader';
import { NetworkProvider } from '../../../providers/network/network';
import { Ionic2RatingModule } from 'ionic2-rating';

@IonicPage()
@Component({
  selector: 'page-customer-review',
  templateUrl: 'customer-review.html',
})
export class CustomerReviewPage {
  title = 'customer review form';
  submitAttempt;
  customerReviewForm: FormGroup;
  private formData: any;
  private message;
  private status;
  private projectTypeError;
  private cityError;
  private projectError;
  private imageResponce;

  private nameError;
  private emailError;
  private contactError;
  private descriptionError;
  public cid;
  private pid;
  private proid;
  private rateValue;
  private project_types;
  private city_ids;
  private projects;

  imageURI: any;
  imageFileName: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private CustomerReviewProvider: CustomerReviewProvider,
    public loader: LoaderProvider,
    public toastCtrl: ToastProvider,
    private transfer: FileTransfer,
    private camera: Camera,
    private contactProvider: ContactProvider,
    public actionSheetCtrl: ActionSheetController,
    public network: NetworkProvider
  ) {

    this.nameError = '';
    this.emailError = '';
    this.contactError = '';
    this.descriptionError = '';
    this.projectTypeError = '';
    this.cityError = '';
    this.projectError = '';
    this.message = '';
  

    this.customerReviewForm = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: ['', Validators.required],
      contact: ['', ContactValidator.isValid],
      description: ['', Validators.required],
      project_type_id: ['', Validators.required],
      city_id: ['', Validators.required],
      proj_id: ['', Validators.required],
      rating: ['','']
    });

    
    if (this.network.checkStatus() == true) {
      // this.getProjectType();
      // this.getCities();
    }
  }


  takePicture(sourceType: any) {
    const options: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: sourceType,
    }

    this.camera.getPicture(options).then((imageData) => {
      // this.imageURI = imageData;
      this.imageURI = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      this.toastCtrl.presentToast(err);
    });
  }

  public getImageActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  uploadFile() {
    this.loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'ionicfile.jpg',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }

    fileTransfer.upload(this.imageURI, 'http://www.muskowl.com/complain/image_upload', options)
      .then((data) => {
        this.imageResponce = JSON.parse(data.response);
        console.log(data + " Uploaded Successfully");
        this.imageFileName = this.imageResponce.result.file_path;
        this.loader.dismiss();
        this.toastCtrl.presentToast("Image uploaded successfully");
      }, (err) => {
        console.log(err);
        this.loader.dismiss();
        this.toastCtrl.presentToast(err);
      });

  }

  public getProjectType() {
    this.loader.present();
    this.contactProvider.getProjectType().subscribe(
      response => {
        this.project_types = response;
      },
      err => console.error(err),
      () => {
        this.loader.dismiss();
      }
    );
    return event;
  }

  public getCities() {
    this.loader.present();
    this.contactProvider.getCities().subscribe(
      response => {
        this.city_ids = response;
      },
      err => console.error(err),
      () => {
        this.loader.dismiss();
      }
    );
    return event;
  }

  onCityChange(selectedValue) {
    this.cid = selectedValue;
    console.log(this.cid);
    if (this.pid !== undefined && this.pid !== '') {
      this.getProject();
    }
  }

  onProTypeChange(selectedValue) {
    console.info("ProjetcType:", selectedValue);
    this.pid = selectedValue;
    if (this.cid !== undefined && this.cid !== '') {
      this.getProject();
    }
  }

  onProjectChange(selectedValue) {
    this.proid = selectedValue;
    console.log(this.proid);
  
  }

  onRateChange(rate){
    this.rateValue = rate;
    console.log(this.rateValue);
  }

  public getProject() {
    this.loader.present();
    this.contactProvider.getProjects(this.pid, this.cid).subscribe(
      response => {
        this.projects = response;
        console.log(response);
      },
      err => console.error(err),
      () => {
        this.loader.dismiss();
      }
    );
    return event;
  }

  save() {
    this.submitAttempt = true;
    this.formData = this.customerReviewForm.valid;

    if (this.customerReviewForm.valid) {

      console.log(this.customerReviewForm.value);

      this.CustomerReviewProvider.post(this.customerReviewForm.value, this.imageFileName).subscribe(
        response => {
          this.status = response.status;
          this.message = response.message;

          if (!this.status) {
            this.submitAttempt = true;
            if (response.inputerror.length) {
              for (let index = 0; index < response.inputerror.length; index++) {
                if (response.inputerror[index] == 'name') {
                  this.customerReviewForm.controls['name'].setErrors({ 'incorrect': true });
                  this.nameError = response.error_string[index];
                }
                if (response.inputerror[index] == 'email') {
                  this.customerReviewForm.controls['email'].setErrors({ 'incorrect': true });
                  this.emailError = response.error_string[index];
                }
                if (response.inputerror[index] == 'contact') {
                  this.customerReviewForm.controls['contact'].setErrors({ 'incorrect': true });
                  this.contactError = response.error_string[index];
                }
                if (response.inputerror[index] == 'description') {
                  this.customerReviewForm.controls['description'].setErrors({ 'incorrect': true });
                  this.descriptionError = response.error_string[index];
                }
                if (response.inputerror[index] == 'project_type_id') {
                  this.customerReviewForm.controls['project_type_id'].setErrors({ 'incorrect': true });
                  this.projectTypeError = response.error_string[index];
                }
                if (response.inputerror[index] == 'city_id') {
                  this.customerReviewForm.controls['city_id'].setErrors({ 'incorrect': true });
                  this.cityError = response.error_string[index];
                }
                if (response.inputerror[index] == 'proj_id') {
                  this.customerReviewForm.controls['proj_id'].setErrors({ 'incorrect': true });
                  this.projectError = response.error_string[index];
                }
              }
            }
          }

        },
        err => console.error(err),
        () => {
          // this.loader.dismiss();
        }
      );
    } else {
      this.projectTypeError = 'Please select Project Type';
      this.cityError = 'Please select Project City';
      this.projectError = 'Please select Project';
      this.nameError = 'Please enter a valid name';
      this.emailError = 'Please enter a valid email';
      this.contactError = 'Please enter a valid contact';
      this.descriptionError = 'Please enter a valid message';
      this.message = 'From Validation error!';
    }

    this.toastCtrl.presentToast(this.message);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerReviewPage');
  }
}