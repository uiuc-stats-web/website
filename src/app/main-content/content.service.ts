import { Injectable,
  ComponentFactoryResolver,
  ViewContainerRef,
  } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Injectable()
export class ContentService {
  container: ViewContainerRef;

  constructor(private factoryResolver: ComponentFactoryResolver) {
  }

  setRootView(viewContainerRef: ViewContainerRef) {
    this.container = viewContainerRef;
  }

  addComponent() {
    const factory = this.factoryResolver.resolveComponentFactory(HomeComponent);
    const component = factory.create(this.container.parentInjector);
    this.container.insert(component.hostView);
  }
}
