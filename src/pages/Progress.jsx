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
        <div className="space-y-6 pb-24 animate-fade-in">
            <div className="mb-4">
                <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Your Progress</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">Track your journey to mastery</p>
            </div>

            {/* Level Card */}
            <div className="bg-slate-900 dark:bg-surface-850 rounded-2xl p-6 text-white shadow-lift dark:shadow-dark-lift relative overflow-hidden border border-transparent dark:border-slate-700/30">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                    <div className="relative">
                        <svg className="w-28 h-28 transform -rotate-90">
                            <circle cx="56" cy="56" r="52" stroke="currentColor" strokeWidth="7" fill="transparent" className="text-slate-700" />
                            <circle
                                cx="56" cy="56" r="52" stroke="currentColor" strokeWidth="7" fill="transparent"
                                strokeDasharray={2 * Math.PI * 52}
                                strokeDashoffset={2 * Math.PI * 52 * (1 - levelProgress / 100)}
                                className="text-brand-500 transition-all duration-1000 ease-out"
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-display font-bold">{level}</span>
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Level</span>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="text-brand-400 font-bold uppercase tracking-widest text-xs mb-1">{LEVEL_TITLES[level] || 'Master'}</div>
                        <h3 className="text-xl font-display font-bold mb-1">Keep it up!</h3>
                        <p className="text-slate-400 text-sm">You need <span className="text-white font-bold">{nextLevelXp - progress.xp} XP</span> to reach Level {level + 1}</p>
                    </div>
                </div>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
                <div className="premium-card p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-yellow-50 dark:bg-yellow-950/50 text-yellow-500 dark:text-yellow-400 flex items-center justify-center shrink-0">
                        <StarIcon size={20} />
                    </div>
                    <div>
                        <div className="text-lg font-display font-bold text-slate-900 dark:text-white">{progress.xp}</div>
                        <div className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase">XP</div>
                    </div>
                </div>

                <div className="premium-card p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/50 text-orange-500 dark:text-orange-400 flex items-center justify-center shrink-0">
                        <FlameIcon size={20} />
                    </div>
                    <div>
                        <div className="text-lg font-display font-bold text-slate-900 dark:text-white">{progress.streak.current}</div>
                        <div className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase">Streak</div>
                    </div>
                </div>

                <div className="premium-card p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/50 text-brand-500 dark:text-brand-400 flex items-center justify-center shrink-0">
                        <TargetIcon size={20} />
                    </div>
                    <div>
                        <div className="text-lg font-display font-bold text-slate-900 dark:text-white">{toeicScore}</div>
                        <div className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase">TOEIC</div>
                    </div>
                </div>
            </div>

            {/* Detailed Progress */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <section className="premium-card p-5">
                    <h3 className="text-base font-display font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                        <BookIcon size={18} className="text-brand-600 dark:text-brand-400" /> Grammar Mastery
                    </h3>

                    <div className="flex items-center gap-5 mb-5">
                        <div className="flex-1">
                            <div className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-0.5">{Math.round((grammarStats.completed / 145) * 100)}%</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">Course Completion</div>
                        </div>
                        <div className="w-20 h-20 relative">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-slate-100 dark:text-surface-700" />
                                <circle
                                    cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="6" fill="transparent"
                                    strokeDasharray={2 * Math.PI * 34}
                                    strokeDashoffset={2 * Math.PI * 34 * (1 - (grammarStats.completed / 145))}
                                    className="text-brand-500"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div>
                            <div className="flex items-center justify-between text-sm mb-1.5">
                                <span className="text-slate-600 dark:text-slate-400">Units Completed</span>
                                <span className="font-bold text-slate-900 dark:text-white">{grammarStats.completed} / 145</span>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-surface-700 rounded-full h-1.5">
                                <div className="bg-gradient-to-r from-brand-500 to-brand-400 h-1.5 rounded-full transition-all duration-500" style={{ width: `${(grammarStats.completed / 145) * 100}%` }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between text-sm mb-1.5">
                                <span className="text-slate-600 dark:text-slate-400">Average Score</span>
                                <span className="font-bold text-slate-900 dark:text-white">{grammarStats.averageScore}%</span>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-surface-700 rounded-full h-1.5">
                                <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-1.5 rounded-full transition-all duration-500" style={{ width: `${grammarStats.averageScore}%` }}></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="premium-card p-5">
                    <h3 className="text-base font-display font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                        <PenIcon size={18} className="text-brand-600 dark:text-brand-400" /> Vocabulary
                    </h3>

                    <div className="grid grid-cols-2 gap-3 mb-5">
                        <div className="bg-slate-50 dark:bg-surface-700 p-3 rounded-xl text-center">
                            <div className="text-xl font-display font-bold text-slate-900 dark:text-white">{progress.vocabulary?.totalLearned || 0}</div>
                            <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">Words Learned</div>
                        </div>
                        <div className="bg-emerald-50 dark:bg-emerald-950/30 p-3 rounded-xl text-center">
                            <div className="text-xl font-display font-bold text-emerald-600 dark:text-emerald-400">{progress.vocabulary?.totalMastered || 0}</div>
                            <div className="text-[10px] font-bold text-emerald-600/60 dark:text-emerald-400/60 uppercase">Mastered</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Box Distribution</div>
                        {[5, 4, 3, 2, 1].map(box => {
                            const count = Object.values(progress.vocabulary?.words || {}).filter(w => w.box === box).length
                            const total = Object.keys(progress.vocabulary?.words || {}).length || 1
                            const pct = (count / total) * 100

                            return (
                                <div key={box} className="flex items-center gap-3 text-sm">
                                    <div className="w-10 font-medium text-slate-500 dark:text-slate-400 text-xs">Box {box}</div>
                                    <div className="flex-1 h-1.5 bg-slate-100 dark:bg-surface-700 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${box >= 4 ? 'bg-emerald-500' : box >= 2 ? 'bg-brand-500' : 'bg-amber-500'}`}
                                            style={{ width: `${pct}%` }}
                                        />
                                    </div>
                                    <div className="w-6 text-right font-bold text-slate-700 dark:text-slate-300 text-xs">{count}</div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}
