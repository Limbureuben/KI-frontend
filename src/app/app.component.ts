import { Component, PLATFORM_ID, Inject, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'test';
  
  // 🟡 Language switcher UI state
  // showDropdown = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Save last visited route
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          localStorage.setItem('lastRoute', event.urlAfterRedirects);
        });

      // Restore last route if token exists
      const token = localStorage.getItem('token');
      const lastRoute = localStorage.getItem('lastRoute');

      if (token && lastRoute) {
        this.router.navigateByUrl(lastRoute);
      } else {
        this.router.navigate(['/user-home']);
      }

      // 🟡 Load Google Translate (DISABLED)
      // this.loadGoogleTranslate();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // 🟡 Language switcher initialization (DISABLED)
      /*
      if ((window as any).google && (window as any).google.translate) {
        (window as any).googleTranslateElementInit();
      } else {
        const interval = setInterval(() => {
          if ((window as any).google && (window as any).google.translate) {
            (window as any).googleTranslateElementInit();
            clearInterval(interval);
          }
        }, 500);
      }
      */
    }
  }

  // 🟡 Google Translate loader (DISABLED)
  /*
  loadGoogleTranslate() {
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,sw',
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');

      // Hide container if injected
      const gtElem = document.getElementById('google_translate_element');
      if (gtElem) {
        gtElem.style.display = 'none';
      }

      // Remove both banner frame and wrapper
      this.hideTranslateBanner();
    };

    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }
  */

  // 🟡 Hide Google Translate banner (DISABLED)
  /*
  hideTranslateBanner() {
    const intervalId = setInterval(() => {
      const bannerFrame = document.querySelector('iframe.goog-te-banner-frame.skiptranslate') as HTMLElement;
      if (bannerFrame) {
        bannerFrame.remove();
        document.body.style.top = '0px';
      }

      const bannerWrapper = document.querySelector('body > .skiptranslate') as HTMLElement;
      if (bannerWrapper) {
        bannerWrapper.remove();
        document.body.style.top = '0px';
      }

      if (!bannerFrame && !bannerWrapper) {
        clearInterval(intervalId);
      }
    }, 300);
  }
  */

  // 🟡 Dropdown toggle (DISABLED)
  /*
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  */

  // 🟡 Switch page language (DISABLED)
  /*
  translatePage(lang: string) {
    const languageCode = lang === 'sw' ? 'sw' : 'en';
    const cookieValue = `/en/${languageCode}`;
    const domain = window.location.hostname;

    document.cookie = `googtrans=${cookieValue}; path=/; domain=${domain}`;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=.${domain}`;

    window.location.reload();
  }
  */
}
