import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { InfopulseRestService } from '../services/infopulse-rest.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

    data1: any;
    data2: any;
    data3: any;
    data4: any;

    constructor(public api: InfopulseRestService, public loadingController: LoadingController) { }

    ngOnInit() {
        this.getData();
    }

    async getData() {
        const loading = await this.loadingController.create({
            message: 'Please wait...',
        });
        await loading.present();
        this.api.getData()
            .subscribe(res => {
                this.data1 = res[0];
                this.data2 = res[1];
                this.data3 = res[2];
                this.data4 = res[3];
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
    }
}
