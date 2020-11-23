import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePageThreeComponent } from './article-page-three.component';

describe('ArticlePageThreeComponent', () => {
  let component: ArticlePageThreeComponent;
  let fixture: ComponentFixture<ArticlePageThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlePageThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
