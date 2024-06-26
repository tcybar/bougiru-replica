/**
 * 戦闘に参加するキャラクター
 */
export class BattleCharacter {
  private _name: string;
  private _hp: number;

  constructor(name: string, hp: number) {
    this._name = name;
    this._hp = hp;
  }

  public get name(): string {
    return this._name;
  }

  // 死亡しているか
  public IsDead(): boolean {
    return this._hp <= 0;
  }

  // ダメージを受ける
  public ReceiveDamage(damage: number): void {
    if (this._hp - damage <= 0) {
      this._hp = 0;
    } else {
      this._hp -= damage;
    }
  }
}
