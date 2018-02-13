import { Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
    selector: 'user-info',
    templateUrl: 'user-info.html'
})
export class UserInfo {
    @Input()
    public user: User
}
