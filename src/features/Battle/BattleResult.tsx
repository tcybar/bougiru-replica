import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { actionType } from '@/lib/master/const';

type Action = {
  actionNo: number;
  actioner: string;
  actionType: number;
  target: string;
  damage: number;
};

type Result = {
  turn: number;
  action: Action[];
};

const BattleResult = () => {
  const results: Result[] = [
    {
      turn: 1,
      action: [
        {
          actionNo: 1,
          actioner: '勇者',
          actionType: 0,
          target: 'モンスター',
          damage: 10,
        },
        {
          actionNo: 2,
          actioner: 'モンスター',
          actionType: 0,
          target: '勇者',
          damage: 10,
        },
      ],
    },
    {
      turn: 2,
      action: [
        {
          actionNo: 1,
          actioner: '勇者',
          actionType: 0,
          target: 'モンスター',
          damage: 10,
        },
        {
          actionNo: 2,
          actioner: 'モンスター',
          actionType: 0,
          target: '勇者',
          damage: 10,
        },
      ],
    },
  ];

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
                  {action.actioner}の{actionType[action.actionType].name}
                </CardHeader>
                <CardContent>
                  <p>
                    {action.target}に{action.damage}のダメージを与えた。
                  </p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      ))}
    </>

    // <div>
    //   <h1>BattleResult</h1>
    //   <Card className="max-w-[500px]">
    //     <CardHeader>
    //       1ターン目
    //       <Card className="m-2">
    //         <CardHeader>状況</CardHeader>
    //         <CardContent>
    //           <p>勇者 HP: 100</p>
    //           <p>モンスター HP: 100</p>
    //         </CardContent>
    //       </Card>
    //     </CardHeader>
    //     <CardContent>
    //       <Card className="m-2 bg-gray-700">
    //         <CardHeader>勇者の{actionType[0].name}</CardHeader>
    //         <CardContent>
    //           <p>モンスターに10のダメージを与えた。</p>
    //         </CardContent>
    //       </Card>
    //       <Card className="m-2 text-right bg-gray-900">
    //         <CardHeader>モンスターの通常攻撃</CardHeader>
    //         <CardContent>
    //           <p>勇者に10のダメージを与えた。</p>
    //         </CardContent>
    //       </Card>
    //       <Card className="m-2 bg-gray-700">
    //         <CardHeader>勇者の通常攻撃</CardHeader>
    //         <CardContent>
    //           <p>モンスターに10のダメージを与えた。</p>
    //         </CardContent>
    //       </Card>
    //       <Card className="m-2 text-right bg-gray-900">
    //         <CardHeader>モンスターの通常攻撃</CardHeader>
    //         <CardContent>
    //           <p>勇者に10のダメージを与えた。</p>
    //         </CardContent>
    //       </Card>
    //       <Card className="m-2 bg-gray-700">
    //         <CardHeader>勇者の通常攻撃</CardHeader>
    //         <CardContent>
    //           <p>モンスターに10のダメージを与えた。</p>
    //         </CardContent>
    //       </Card>
    //       <Card className="m-2 text-right bg-gray-900">
    //         <CardHeader>モンスターの通常攻撃</CardHeader>
    //         <CardContent>
    //           <p>勇者に10のダメージを与えた。</p>
    //         </CardContent>
    //       </Card>
    //     </CardContent>
    //   </Card>
    // </div>
  );
};

export default BattleResult;
