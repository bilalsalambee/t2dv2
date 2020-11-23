import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePageFourComponent } from './article-page-four.component';

describe('ArticlePageFourComponent', () => {
  let component: ArticlePageFourComponent;
  let fixture: ComponentFixture<ArticlePageFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlePageFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
