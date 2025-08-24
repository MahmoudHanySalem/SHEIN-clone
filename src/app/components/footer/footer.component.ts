import {
  Component,
  HostListener,
  inject,
  ViewChild,
} from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal, PortalModule, CdkPortal } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faPinterest,
  faSnapchat,
  faTiktok,
  faLinkedin,
  faAndroid,
  faApple,
} from '@fortawesome/free-brands-svg-icons';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  NgModel,
} from '@angular/forms';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-footer',
  imports: [
    OverlayModule,
    PortalModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  globalService: GlobalService = inject(GlobalService);
  country: string = this.globalService.country;
  selectedCountry: string = '';
  countryCode: string = 'US +1';

  scrolly = 0;

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faPinterest = faPinterest;
  faSnapchat = faSnapchat;
  faTiktok = faTiktok;
  faLinkedin = faLinkedin;
  faAndroid = faAndroid;
  faApple = faApple;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolly = window.scrollY; // updates on every scroll
  }

  @ViewChild(CdkPortal) portal!: CdkPortal;

  constructor(private overlay: Overlay) {}
  overlayRef!: OverlayRef;

  popup() {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
    this.overlayRef.attach(this.portal);
  }

  selectCountry(country: string) {
    this.selectedCountry = country;
  }
  onCancel() {
    this.overlayRef.detach();
  }
  onConfirm() {
    if (this.selectedCountry !== '') {
      this.country = this.selectedCountry;
    }
    this.overlayRef.detach();
  }

  totop() {
    scrollTo(0, 0);
  }

  EmailForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  phoneForm = new FormGroup({
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
  });

  EmailhasError(controlName: string, errorType: string): boolean {
    const control = this.EmailForm.get(controlName);

    if (control?.valid) {
      return false;
    } else {
      if (control?.hasError('email') && errorType === 'email') {
        return true;
      }
      if (errorType === 'required' && control?.touched) {
        return true;
      }
    }
    return false;
  }

  phonehasError(controlName: string, errorType: string): boolean {
    const control = this.phoneForm.get(controlName);

    if (control?.valid) {
      return false;
    } else {
      if (control?.hasError('pattern') && errorType === 'pattern') {
        return true;
      }
      if (errorType === 'required' && control?.touched) {
        return true;
      }
    }
    return false;
  }

  emailSubmet($event: Event) {
    if (this.EmailForm.valid) {
      console.log(this.EmailForm.value);
      this.EmailForm.reset();
    } else {
      if (this.EmailForm.get('email')?.errors) {
        console.log('form not submitted');
      }
    }
  }
  phoneSubmet($event: Event) {
    if (this.phoneForm.valid) {
      console.log(this.phoneForm.value);
      this.phoneForm.reset();
    } else {
      if (this.phoneForm.get('phoneNumber')?.errors) {
        console.log('form not submitted');
      }
    }
  }

  countries: string[] = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo (Congo-Brazzaville)',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czechia (Czech Republic)',
    'Democratic Republic of the Congo',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini (fmr. Swaziland)',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Holy See',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar (Burma)',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Korea',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine State',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States of America',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ];
}
