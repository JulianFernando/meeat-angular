import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs';

import { MenuItem } from '../menu-item/menu.item.model';

@Component({
    selector: 'mt-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

    menu: Observable<MenuItem[]>

    constructor(private restauranteService: RestaurantsService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.menu = this.restauranteService
            .menuOfRestaurante(this.route.parent.snapshot.params['id']);
    }

    addMenuItem(item: MenuItem) {
        console.log(item);
    }
}
