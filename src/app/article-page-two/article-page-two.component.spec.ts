import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePageTwoComponent } from './article-page-two.component';

describe('ArticlePageTwoComponent', () => {
  let component: ArticlePageTwoComponent;
  let fixture: ComponentFixture<ArticlePageTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlePageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
