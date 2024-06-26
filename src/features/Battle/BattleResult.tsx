import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { BattleCharacter } from '@/features/Battle/models/BattleCharacter';
import { actionType } from '@/lib/master/const';
import { useEffect, useState } from 'react';

const MAX_TURN = 20;

type Action = {
  actionNo: number;
  actioner: string;
  actionType: number;
  target: string;
  damage: number;
  isDead: boolean;
};

type Result = {
  turn: number;
  action: Action[];
};

const BattleResult = () => {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    execBattle();
  }, []);

  const execBattle = () => {
    const tmpResults: Result[] = [];

    const playerCharacter = new BattleCharacter('勇者', 100);
    const enemyCharacter = new BattleCharacter('モンスター', 100);

    let turn = 1;
    while (
      !playerCharacter.IsDead() &&
      !enemyCharacter.IsDead() &&
      turn <= MAX_TURN
    ) {
      const actions: Action[] = [];

      // ===== 勇者の攻撃 =====
      const playerActionType = 0;
      const playerDamage = 10;
      enemyCharacter.ReceiveDamage(playerDamage);
      const playerAction: Action = {
        actionNo: turn,
        actioner: playerCharacter.name,
        actionType: playerActionType,
        target: enemyCharacter.name,
        damage: playerDamage,
        isDead: enemyCharacter.IsDead(),
      };
      actions.push(playerAction);
      // =====================

      // ===== モンスターの攻撃 =====
      const enemyActionType = 0;
      const enemyDamage = 10;
      playerCharacter.ReceiveDamage(enemyDamage);
      const enemyAction: Action = {
        actionNo: turn,
        actioner: enemyCharacter.name,
        actionType: enemyActionType,
        target: playerCharacter.name,
        damage: enemyDamage,
        isDead: playerCharacter.IsDead(),
      };
      actions.push(enemyAction);
      // =====================

      const tmpResult: Result = {
        turn: turn,
        action: actions,
      };
      tmpResults.push(tmpResult);

      turn++;
    }

    setResults(tmpResults);
  };

  return (
    <>
      {results.map((result: Result) => (
        <Card key={result.turn} className="max-w-[500px] m-2">
          <CardHeader>{result.turn}ターン目</CardHeader>
          <CardContent>
            {result.action.map((action: Action) => (
              <Card
                key={action.actionNo}
                className={`m-2 ${action.actioner === '勇者' ? 'bg-gray-700' : 'text-right  bg-gray-900'}`}
              >
                <CardHeader>
                  {action.actioner}の{actionType[action.actionType].label}
                </CardHeader>
                <CardContent>
                  <p>
                    {action.target}に{action.damage}のダメージを与えた。
                    {action.isDead && (
                      <p>{action.target}は戦闘不能になった。</p>
                    )}
                  </p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default BattleResult;
