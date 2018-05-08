import { TabGroupRoutedModule } from './tab-group-routed.module';

describe('TabGroupRoutedModule', () => {
  let tabGroupRoutedModule: TabGroupRoutedModule;

  beforeEach(() => {
    tabGroupRoutedModule = new TabGroupRoutedModule();
  });

  it('should create an instance', () => {
    expect(tabGroupRoutedModule).toBeTruthy();
  });
});
