/**
 * 策略奖品值对象
 */
export interface RaffleAwardVO {
    awardId: number;
    awardTitle: string;
    awardSubtitle: string;
    sort: number;
    awardRuleLockCount: number;
    isAwardUnLocked: boolean;
    waitUnLockCount: number;
}