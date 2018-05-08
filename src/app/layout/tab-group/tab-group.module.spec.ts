import { TabGroupModule } from './tab-group.module';

describe('TabGroupModule', () => {
  let tabGroupModule: TabGroupModule;

  beforeEach(() => {
    tabGroupModule = new TabGroupModule();
  });

  it('should create an instance', () => {
    expect(tabGroupModule).toBeTruthy();
  });
});
