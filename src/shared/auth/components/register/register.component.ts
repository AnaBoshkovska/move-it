import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public registerForm: FormGroup;
    public error: string;
    public submitted: boolean = false;

    get form() { return this.registerForm.controls; }

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,) {
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            password: ['', [Validators.required, Validators.minLength(6),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}') ]]
        });
    }

    onSubmit() {
        this.submitted = true;
        this.error = "";
        if (this.registerForm.invalid) {
            return;
        }

        this.userService.register(this.registerForm.value)
            .subscribe(
                data => {
                    this.router.navigate(['/login']);
                },
                error => {
                    this.error = "There was an error while registering user."
                });
    }
}
