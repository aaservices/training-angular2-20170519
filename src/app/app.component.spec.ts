import { ComponentFixture, TestBed, ComponentFixtureAutoDetect, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement, Component }    from '@angular/core';
import { AppComponent } from './app.component';
import { AccountListService } from './accounts/account-list.service';
import { Account } from './accounts/account.type';

@Component({
    selector: 'account-list',
    template: `This is a test`
})
class TestAccountListComponent {}

let accountListServiceStub = {
    getAccountList(): Array<Account> {
        return [];
    }
};

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AppComponent, TestAccountListComponent ], // declare the test component
            providers: [
                {provide: ComponentFixtureAutoDetect, useValue: true},
                {provide: AccountListService, useValue: accountListServiceStub }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);

        component = fixture.componentInstance; // AppComponent test instance
    });

    describe('Display page name', () => {
        let de: DebugElement;
        let el: HTMLElement;

        beforeEach(() => {
            // query for the title <h1> by CSS element selector
            de = fixture.debugElement.query(By.css('h1'));
            el = de.nativeElement;
        });

        it('should display the original name', () => {
            expect(el.textContent).toContain('Learning Actors');
        });

        it('should update if the name changes', () => {
            component.name = 'New name';
            fixture.detectChanges();
            expect(el.textContent).toContain('New name');
        });
    });

    describe('Display accounts', () => {
        let lis: Array<DebugElement>;

        beforeEach(() => {
            lis = fixture.debugElement.queryAll(By.css('li'));
        });

        it('should display all accounts', () => {
            expect(lis.length).toBe(4);
        })
    });
});
