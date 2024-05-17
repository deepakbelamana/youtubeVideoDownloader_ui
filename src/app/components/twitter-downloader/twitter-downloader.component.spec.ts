import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterDownloaderComponent } from './twitter-downloader.component';

describe('TwitterDownloaderComponent', () => {
  let component: TwitterDownloaderComponent;
  let fixture: ComponentFixture<TwitterDownloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwitterDownloaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwitterDownloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
