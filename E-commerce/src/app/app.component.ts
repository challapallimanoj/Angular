import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'E-Commerce';
  [x: string]: any;
  title = 'Project';
  ngOnInit() {
    (function(d, m){
        var kommunicateSettings = {"appId":"3dbe03b7779e2357dfc8c8d1e0a184413","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window['kommunicate']= m; m._globals = kommunicateSettings;
    })(document, window['kommunicate'] || {});
  }
  
}
