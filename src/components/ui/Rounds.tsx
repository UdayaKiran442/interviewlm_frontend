import { Bot } from "lucide-react";
import { IRoundState } from "@/types/types";
import { Card } from "./Card";
import { Brain, Clock, Trash } from "lucide-react";
import { H5, Tagline } from "./Typography";
import { Label } from "./Label";
import { Select } from "./Select";
import { Input } from "./Input";

export function Rounds({ rounds, updateRound }: { rounds: IRoundState[]; updateRound: (index: number, field: keyof IRoundState, value: any) => void }) {
    return (
        <Card className='border border-gray-300 rounded-2xl mt-2'>
            {rounds.length === 0 ?
                <div className='flex flex-col justify-center items-center'>
                    <Clock size={24} color='gray' />
                    <Tagline>No interview rounds configured yet</Tagline>
                    <Tagline className='!text-[0.8rem] !flex !items-center !gap-1'>Click "Add Round" to get started</Tagline>
                </div> :
                rounds.map((round, index) => (
                    <div key={index} className="space-y-6">
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <Brain size={16} />
                                <H5>Round {round.roundNumber}</H5>
                            </div>
                            <Trash className='cursor-pointer' size={16} color='red' />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            <div className="space-y-2">
                                <Label id='roundType' label='Interview Type' />
                                <Select
                                    id='roundType'
                                    name='roundType'
                                    className='w-full border border-gray-300 rounded-lg p-3'
                                    value={round.roundType}
                                    onChange={(e) => updateRound(index, 'roundType', e.target.value)}
                                >
                                    <option value="Technical Interview">Technical Interview</option>
                                    <option value="Behavioral Interview">Behavioral/HR/Culture fit Interview</option>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label id='roundName' label='Round Name' />
                                <Input
                                    id='roundName'
                                    name='roundName'
                                    placeholder='e.g. Technical Interview - 1'
                                    type='text'
                                    value={round.roundName}
                                    onChange={(e) => updateRound(index, 'roundName', e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label id='duration' label='Duration(in minutes)' />
                                <Input
                                    id='duration'
                                    name='duration'
                                    placeholder='e.g. 60'
                                    type='number'
                                    value={round.duration ?? 0}
                                    onChange={(e) => updateRound(index, 'duration', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            <div className="space-y-2">
                                <Label id='difficulty' label='Difficulty' />
                                <Select
                                    id='difficulty'
                                    name='difficulty'
                                    value={round.difficulty ?? "medium"}
                                    onChange={(e) => updateRound(index, 'difficulty', e.target.value)}
                                >
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label id='questionType' label='Question Type' />
                                <Select
                                    id='questionType'
                                    name='questionType'
                                    value={round.questionType ?? "JD + Resume"}
                                    onChange={(e) => updateRound(index, 'questionType', e.target.value)}
                                >
                                    <option value="JD + Resume">JD + Resume</option>
                                    <option value="JD">JD</option>
                                </Select>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-4">
                            <input onChange={(e) => updateRound(index, 'isAI', e.target.checked)} checked={round.isAI ?? true} type="checkbox" id="isAI" name="isAI" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <Bot className="h-4 w-4 text-blue-500" />
                            <Label id="isAI" className='-ml-1.5' label="AI-Powered Interview" />
                        </div>
                        <div className="space-y-2">
                            <Label id='roundDescription' label='Round Description' />
                            <textarea
                                id='roundDescription'
                                className='w-full border border-gray-300 rounded-lg p-3'
                                placeholder='Enter round description here'
                                name='roundDescription'
                                value={round.roundDescription ?? ""}
                                onChange={(e) => updateRound(index, 'roundDescription', e.target.value)}
                            />
                        </div>
                    </div>
                ))}
        </Card>
    )
}