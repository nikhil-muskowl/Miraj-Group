import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us';
import { SocialLinkComponent } from './social-link/social-link';
import { CustomerReviewComponent } from './customer-review/customer-review';
import { LocationListComponent } from './location-list/location-list';
import { RealResidentComponent } from './real-resident/real-resident';


@NgModule({
    declarations: [AboutUsComponent,
        SocialLinkComponent,
        CustomerReviewComponent,
    LocationListComponent,
    RealResidentComponent,
    ],
    imports: [],
    exports: [AboutUsComponent,
        SocialLinkComponent,
        CustomerReviewComponent,
    LocationListComponent,
    RealResidentComponent,
    ]
})
export class ComponentsModule { }
