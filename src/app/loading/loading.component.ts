import {Component} from "@angular/core";

@Component({
  selector: 'dynamo-loading',
  styles: [
    `
      .loading {
        height: 100px;
        left: 50%;
        margin: -50px 0 0 -50px;
        position: fixed;
        top: 50%;
        width: 100px;
        z-index: 2000;
      }
      
      .loading::before {
        content: "Loading...";
        height: 100px;
        left: 50%;
        margin: -50px 0 0 -50px;
        position: absolute;
        top: 50%;
        width: 100px;
      }
      
      .loading:not(:required)::before {
        animation: spinner .6s linear infinite;
        border: 5px solid #999;
        border-radius: 50%;
        border-top-color: #0273d4;
        content: "";
      }

      @keyframes spinner {
        to {
          transform: rotate(360deg);
        }
      }
    `
  ],
  template: `
    <div class="modal-backdrop fade show"></div>
    <div class="loading"></div>
  `
})
export class LoadingComponent {}
