import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.services';
import { SecurityUtil } from 'src/app/utils/security.util';
import { StatusUtil } from 'src/app/utils/status.util';

@Component({
  selector: 'app-order-teste',
  templateUrl: './order-teste.page.html',
  styleUrls: ['./order-teste.page.scss'],
})
export class OrderTestePage implements OnInit {
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
