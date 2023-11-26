import { LinearGradient as Lg } from 'react-text-gradients';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen -mt-8">
      <div>
        <img className="max-w-lg h-auto" src="/tarefa.png" alt="Task Manager Img" />
      </div>
      <div className="flex flex-col items-start mr-4">
        <h2 className="font-bold text-6xl mb-4 text-amber-300">
          <Lg gradient={['to bottom', 'rgb(252, 211, 77), rgb(217, 119, 6)']}>
            Gerenciador de Tarefas
          </Lg>
        </h2>
        <p className="text-xl ml-2">A sua organização em um só lugar!</p>
      </div>
    </div>
  );
}
