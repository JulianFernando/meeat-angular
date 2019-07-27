import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from 'app/order/order.service';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { LoginService } from 'app/security/login/login.service';

import { InputContainerComponent } from './input/input-container.component';
import { NotificationService } from './messages/notification.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
    declarations: [InputContainerComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputContainerComponent, RadioComponent, RatingComponent, CommonModule, FormsModule, ReactiveFormsModule, SnackbarComponent]
})
export class SharedModule {
    static forRootsComProviders(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [RestaurantsService, ShoppingCartService, OrderService, NotificationService, LoginService]
        }
    }
}
