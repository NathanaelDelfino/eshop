import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StatusUtil } from 'src/app/utils/status.util';
import { UserModel } from 'src/app/models/user.model';
import { SecurityUtil } from 'src/app/utils/security.util';
import { DataService } from 'src/app/data.services';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  public order = null;

  constructor(
    private route: ActivatedRoute,
    private service: DataService,
  ) { }

  ngOnInit() {
    console.log(`Teste`);
    let number = this.route.snapshot.paramMap.get('number');
    console.log(`Pedido Teste : ${number}`);
    this.service
      .getOrder(number)
      .subscribe((data) => {
        this.order = data;
      });
  }

  translateOrderStatus(status: string): string {
    return StatusUtil.convert(status);
  }

  isManager(): boolean {
    return SecurityUtil.isInRole('manager');
  }
}