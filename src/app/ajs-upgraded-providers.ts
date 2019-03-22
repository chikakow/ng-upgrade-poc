export class NotifyService {
  notify: any;
}

export function notifyServiceFactory(i: any) {
  return i.get('notifyService');
}

export const notifyServiceProvider = {
  provide: NotifyService,
  useFactory: notifyServiceFactory,
  deps: ['$injector']
};
