import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let user = new User({
      name: 'tharun',
      hireable: true
    });
    expect(user.name).toEqual('tharun');
    expect(user.hireable).toEqual(true);
  });
});
