import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'macaroons';

  showPresent: boolean = true; 

  phoneNumber: string = '+375 (29) 368-98-68';
  instagramLink: string = 'https://instagram.com/macaroons';
  instagramImage: string = 'insta.png';

  public advantages = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ];

  public products = [
    {
      title: 'Макарун с малиной',
      price: 1.7,
      img: 'pinkM.png'
    },
    {
      title: 'Макарун с манго',
      price: 1.7,
      img: 'yellowM.png'
    },
    {
      title: 'Пирог с ванилью',
      price: 1.7,
      img: 'whiteM.png'
    },
    {
      title: 'Пирог с фисташками',
      price: 1.7,
      img: 'greenM.png'
    }
  ];

  selectedProduct: string = '';

  selectProduct(productTitle: string) {
    this.selectedProduct = productTitle.toUpperCase();
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: "smooth" });
  }

  togglePresent(): void {
    this.showPresent = !this.showPresent;
  }

}
