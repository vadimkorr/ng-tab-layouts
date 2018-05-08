import { TabGroupRoutedPlaygroundModule } from './tab-group-routed-playground.module';

describe('TabGroupRoutedPlaygroundModule', () => {
  let tabGroupRoutedPlaygroundModule: TabGroupRoutedPlaygroundModule;

  beforeEach(() => {
    tabGroupRoutedPlaygroundModule = new TabGroupRoutedPlaygroundModule();
  });

  it('should create an instance', () => {
    expect(tabGroupRoutedPlaygroundModule).toBeTruthy();
  });
});
