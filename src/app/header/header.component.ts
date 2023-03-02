import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isMenuCollapsed = true;

  fullScreen(){
    if(document.fullscreen){
      document.exitFullscreen();
    } else{
      document.querySelector('body')!.requestFullscreen()
    }
  }


}

declare global {
  interface Document {
    webkitIsFullScreen?: () => Promise<void>;
    mozFullScreen ?: () => Promise<void>;
    msFullscreenElement?: () => Promise<void>;
  }
}
