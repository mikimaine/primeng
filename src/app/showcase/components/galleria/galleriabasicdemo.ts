import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ImageService } from '../../service/imageservice';

@Component({
    templateUrl: './galleriabasicdemo.html'
})
export class GalleriaBasicDemo implements OnInit {
    
    images: any[];

    get activeIndex(): number {
        return this._activeIndex;
      }
    
    set activeIndex(newValue) {
        if (this.images && 0 <= newValue && newValue <= (this.images.length - 1)) {
            this._activeIndex = newValue;
        }
    }

    _activeIndex: number = 2;
    
    responsiveOptions:any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private imageService: ImageService) { }

    ngOnInit() {
        this.imageService.getImages().then(images => this.images = images)
    }

    next() {
        this.activeIndex++;
    }

    prev() {
        this.activeIndex--;
    }
}