'use client'

import { useState } from 'react'

export default function Home() {
  // Estado do input (texto digitado)
  const [task, setTask] = useState('')

  // Lista de tarefas
  const [tasks, setTasks] = useState<string[]>([])

  // Adiciona uma nova tarefa
  function addTask() {
    // Evita adicionar tarefa vazia
    if (!task.trim()) return

    // Adiciona a nova tarefa na lista
    setTasks([...tasks, task])

    // Limpa o input
    setTask('')
  }

  // Remove uma tarefa pelo índice
  function deleteTask(index: number) {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        
        <h1 className="text-2xl font-bold text-center mb-6">
          Lista de Tarefas
        </h1>

        {/* Input + botão de adicionar */}
        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Digite uma tarefa"
          />

          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600 transition"
          >
            +
          </button>
        </div>

        {/* Lista de tarefas */}
        <ul className="space-y-2">
          {tasks.map((t, i) => (
            <li
              key={i}
              className="bg-gray-50 p-3 rounded-lg shadow-sm flex justify-between items-center"
            >
              {/* Texto da tarefa */}
              <span>{t}</span>

              {/* Botão de deletar */}
              <button
                onClick={() => deleteTask(i)}
                className="text-red-500 hover:text-red-700 font-bold"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>

      </div>

    </div>
  )
}