import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { LatestArticleComponent } from '../latest-article/latest-article.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';

@Component({
  selector: 'codebyteai-layout',
  standalone: true,
  imports: [HeroSectionComponent,AboutUsComponent,LatestArticleComponent,TestimonialsComponent,NewsletterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
