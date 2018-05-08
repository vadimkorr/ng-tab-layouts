import { TabGroupPlaygroundModule } from './tab-group-playground.module';

describe('TabGroupPlaygroundModule', () => {
  let tabGroupPlaygroundModule: TabGroupPlaygroundModule;

  beforeEach(() => {
    tabGroupPlaygroundModule = new TabGroupPlaygroundModule();
  });

  it('should create an instance', () => {
    expect(tabGroupPlaygroundModule).toBeTruthy();
  });
});
