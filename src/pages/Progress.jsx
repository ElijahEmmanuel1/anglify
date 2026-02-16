import { useState, useMemo } from 'react'
import {
    calculateLevel,
    xpToNextLevel,
    LEVEL_TITLES,
    getGrammarStats,
    getToeicStats,
    estimateToeicScore
} from '../utils/progressEngine'
import { StarIcon, FlameIcon, ChartIcon, TargetIcon, BookIcon, PenIcon } from '../components/Icons'

export default function Progress({ progress }) {
    const level = calculateLevel(progress.xp)
    const nextLevelXp = xpToNextLevel(level)
    const currentLevelBaseXp = xpToNextLevel(level - 1)
    const levelProgress = ((progress.xp - currentLevelBaseXp) / (nextLevelXp - currentLevelBaseXp)) * 100

    const grammarStats = getGrammarStats(progress)
    const toeicStats = getToeicStats(progress)
    const toeicScore = estimateToeicScore(progress)

    return (
        <div className="space-y-8 pb-24 animate-fadeIn">
            <div className="mb-4">
                <h2 className="text-3xl font-display font-bold text-slate-900">Your Progress</h2>
                <p className="text-slate-500 mt-2">Track your journey to mastery</p>
            </div>

            {/* Level Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="relative">
                        <svg className="w-32 h-32 transform -rotate-90">
                            <circle
                                cx="64"
                                cy="64"
                                r="60"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                className="text-slate-700"
                            />
                            <circle
                                cx="64"
                                cy="64"
                                r="60"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                strokeDasharray={2 * Math.PI * 60}
                                strokeDashoffset={2 * Math.PI * 60 * (1 - levelProgress / 100)}
                                className="text-indigo-500 transition-all duration-1000 ease-out"
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-bold">{level}</span>
                            <span className="text-xs text-slate-400 uppercase tracking-wider">Level</span>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-1">{LEVEL_TITLES[level] || 'Master'}</div>
                        <h3 className="text-3xl font-bold mb-2">Keep it up, Elijah!</h3>
                        <p className="text-slate-400 mb-4">You need <span className="text-white font-bold">{nextLevelXp - progress.xp} XP</span> to reach Level {level + 1}</p>
                    </div>
                </div>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-50 text-yellow-500 flex items-center justify-center shadow-sm">
                        <StarIcon size={24} />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-slate-900">{progress.xp}</div>
                        <div className="text-sm text-slate-500 font-medium">Total XP</div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center shadow-sm">
                        <FlameIcon size={24} />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-slate-900">{progress.streak.current}</div>
                        <div className="text-sm text-slate-500 font-medium">Day Streak</div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-500 flex items-center justify-center shadow-sm">
                        <TargetIcon size={24} />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-slate-900">{toeicScore}</div>
                        <div className="text-sm text-slate-500 font-medium">Est. TOEIC</div>
                    </div>
                </div>
            </div>

            {/* Detailed Progress */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <section className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <BookIcon size={20} className="text-indigo-600" /> Grammar Mastery
                    </h3>

                    <div className="flex items-center gap-6 mb-6">
                        <div className="flex-1">
                            <div className="text-4xl font-display font-bold text-slate-900 mb-1">{Math.round((grammarStats.completed / 145) * 100)}%</div>
                            <div className="text-sm text-slate-500">Course Completion</div>
                        </div>
                        <div className="size-24 rounded-full border-8 border-slate-50 flex items-center justify-center relative">
                            <svg className="w-full h-full transform -rotate-90 absolute">
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r="40"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    fill="transparent"
                                    strokeDasharray={2 * Math.PI * 40}
                                    strokeDashoffset={2 * Math.PI * 40 * (1 - (grammarStats.completed / 145))}
                                    className="text-indigo-500"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">Units Completed</span>
                            <span className="font-bold text-slate-900">{grammarStats.completed} / 145</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                            <div className="bg-indigo-500 h-2 rounded-full transition-all duration-500" style={{ width: `${(grammarStats.completed / 145) * 100}%` }}></div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">Average Score</span>
                            <span className="font-bold text-slate-900">{grammarStats.averageScore}%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                            <div className="bg-emerald-500 h-2 rounded-full transition-all duration-500" style={{ width: `${grammarStats.averageScore}%` }}></div>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <PenIcon size={20} className="text-indigo-600" /> Vocabulary
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-slate-50 p-4 rounded-2xl text-center">
                            <div className="text-2xl font-bold text-slate-900">{progress.vocabulary?.totalLearned || 0}</div>
                            <div className="text-xs font-bold text-slate-400 uppercase">Words Learned</div>
                        </div>
                        <div className="bg-emerald-50 p-4 rounded-2xl text-center">
                            <div className="text-2xl font-bold text-emerald-600">{progress.vocabulary?.totalMastered || 0}</div>
                            <div className="text-xs font-bold text-emerald-600/60 uppercase">Mastered</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                            <span>Box Distribution</span>
                        </div>
                        {[5, 4, 3, 2, 1].map(box => {
                            const count = Object.values(progress.vocabulary?.words || {}).filter(w => w.box === box).length
                            const total = Object.keys(progress.vocabulary?.words || {}).length || 1
                            const pct = (count / total) * 100

                            return (
                                <div key={box} className="flex items-center gap-3 text-sm">
                                    <div className="w-12 font-medium text-slate-500">Box {box}</div>
                                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${box >= 4 ? 'bg-emerald-500' : box >= 2 ? 'bg-indigo-500' : 'bg-amber-500'}`}
                                            style={{ width: `${pct}%` }}
                                        />
                                    </div>
                                    <div className="w-8 text-right font-bold text-slate-700">{count}</div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}
