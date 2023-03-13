import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor() {}
  divs: any = [
    {
      name: 'WEB DEVELOPMENT',
      icon: 'web.svg',
      dis: `Build a website that is as unique as your business with our expert web development services.Let's create an online presence that stands out.`,
    },
    {
      name: 'SOCIAL MEDIA MARKETING',
      icon: 'meta.svg',
      dis: `Get your business in front of the right people with
      our targeted Meta Ads on Facebook and Instagram. 
      Let's reach your ideal customers Now.`,
    },
    {
      name: 'LINKEDIN ADS',
      icon: 'linkedin.svg',
      dis: `Connect with top-notch clients and unlock 
      endless opportunities with our LinkedIn Ads. 
      Let's take your business to new heights!`,
    },
    {
      name: 'SEO SOLUTIONS',
      icon: 'seo.svg',
      dis: `Boost your online visibility and attract more 
      customers with our customized SEO solutions. 
      Let's unlock your business's full potential!`,
    },
  ];
  ngOnInit(): void {}
}
