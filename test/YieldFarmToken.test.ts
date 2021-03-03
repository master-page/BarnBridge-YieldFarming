import { ethers } from "hardhat";
import { BigNumber, Signer } from "ethers";
import * as helpers from "./helpers/helpers";
import * as deploy from "./helpers/deploy";
// import * as time from './helpers/time';
import { expect } from "chai";
import { CommunityVault, ERC20Mock, Staking, YieldFarmToken } from "../typechain";

describe("YieldFarm Token Pool", function () {
    const epochDuration = 1000;
    const numberOfEpochs = 12;
    const epochsDelayedFromStakingContract = 4;

    let poolToken: ERC20Mock, rewardToken: ERC20Mock;
    let communityVault: CommunityVault;
    let yieldFarm: YieldFarmToken;
    let staking: Staking;

    let owner: Signer, user: Signer;
    let userAddr: string;

    const amount = BigNumber.from(100).mul(helpers.tenPow18) as BigNumber;
    const distributedAmount: BigNumber = BigNumber.from(60000).mul(helpers.tenPow18);

    let snapshotId: any;

    before(async () => {
        [owner, user] = await ethers.getSigners();
        userAddr = await user.getAddress();

        poolToken = (await deploy.deployContract("ERC20Mock")) as ERC20Mock;
        rewardToken = (await deploy.deployContract("ERC20Mock")) as ERC20Mock;
        communityVault = (await deploy.deployContract("CommunityVault", [rewardToken.address])) as CommunityVault;
        staking = (await deploy.deployContract("Staking", [Math.floor(Date.now() / 1000) + 1000, epochDuration])) as Staking;

        yieldFarm = (await deploy.deployContract("YieldFarmToken", [
            poolToken.address,
            rewardToken.address,
            staking.address,
            communityVault.address,
            distributedAmount,
            numberOfEpochs,
            epochsDelayedFromStakingContract
        ])) as YieldFarmToken;

        await rewardToken.mint(communityVault.address, distributedAmount);
        await communityVault.connect(owner).setAllowance(yieldFarm.address, distributedAmount);
    });

    beforeEach(async function () {
        snapshotId = await ethers.provider.send("evm_snapshot", []);

    });

    afterEach(async function () {
        await ethers.provider.send("evm_revert", [snapshotId]);
    });

    describe("General Contract checks", function () {
        it("should be deployed", async function () {
            expect(staking.address).to.not.equal(0);
            expect(yieldFarm.address).to.not.equal(0);
            expect(rewardToken.address).to.not.equal(0);
        });

        it("Get epoch PoolSize and distribute tokens", async function () {
            await depositToken(amount);
            await moveAtEpoch(6);
            const totalAmount:BigNumber = amount;
            const aa:BigNumber = await yieldFarm.getPoolSize(1);
            console.log("log", typeof totalAmount, await yieldFarm.getPoolSize(1), amount, typeof aa);
            expect(aa).to.deep.equal(totalAmount);
            // expect(await yieldFarm.getEpochStake(userAddr, 1)).to.equal(totalAmount);
            // expect(await rewardToken.allowance(communityVaultAddr, yieldFarm.address)).to.equal(distributedAmount);
            // expect(await yieldFarm.getCurrentEpoch()).to.equal(2); // epoch on yield is staking - numberOfDelayedEpochs
            //
            // await yieldFarm.connect(user).harvest(1);
            // expect(await rewardToken.balanceOf(userAddr)).to.equal(distributedAmount.div(numberOfEpochs));
        });
    });
//
//     describe('Contract Tests', function () {
//         it('User harvest and mass Harvest', async function () {
//             await depositToken(amount)
//             const totalAmount = amount
//             // initialize epochs meanwhile
//             await moveAtEpoch(12)
//             expect(await yieldFarm.getPoolSize(1)).to.equal(amount)
//
//             expect(await yieldFarm.lastInitializedEpoch()).to.equal(0) // no epoch initialized
//             await expect(yieldFarm.harvest(10)).to.be.revertedWith('This epoch is in the future')
//             await expect(yieldFarm.harvest(3)).to.be.revertedWith('Harvest in order')
//             await (await yieldFarm.connect(user).harvest(1)).wait()
//
//             expect(await rewardToken.balanceOf(userAddr)).to.equal(
//                 amount.mul(distributedAmount.div(numberOfEpochs)).div(totalAmount),
//             )
//             expect(await yieldFarm.connect(user).userLastEpochIdHarvested()).to.equal(1)
//             expect(await yieldFarm.lastInitializedEpoch()).to.equal(1) // epoch 1 have been initialized
//
//             await (await yieldFarm.connect(user).massHarvest()).wait()
//             const totalDistributedAmount = amount.mul(distributedAmount.div(numberOfEpochs)).div(totalAmount).mul(7)
//             expect(await rewardToken.balanceOf(userAddr)).to.equal(totalDistributedAmount)
//             expect(await yieldFarm.connect(user).userLastEpochIdHarvested()).to.equal(7)
//             expect(await yieldFarm.lastInitializedEpoch()).to.equal(7) // epoch 7 have been initialized
//         })
//         it('Have nothing to harvest', async function () {
//             await depositToken(amount)
//             await moveAtEpoch(10)
//             expect(await yieldFarm.getPoolSize(1)).to.equal(amount)
//             await yieldFarm.connect(owner).harvest(1)
//             expect(await rewardToken.balanceOf(await owner.getAddress())).to.equal(0)
//             await yieldFarm.connect(owner).massHarvest()
//             expect(await rewardToken.balanceOf(await owner.getAddress())).to.equal(0)
//         })
//         it('harvest maximum 12 epochs', async function () {
//             await depositToken(amount)
//             const totalAmount = amount
//             await moveAtEpoch(300)
//
//             expect(await yieldFarm.getPoolSize(1)).to.equal(totalAmount)
//             await (await yieldFarm.connect(user).massHarvest()).wait()
//             expect(await yieldFarm.lastInitializedEpoch()).to.equal(numberOfEpochs)
//         })
//
//         it('gives epochid = 0 for previous epochs', async function () {
//             await moveAtEpoch(-2)
//             expect(await yieldFarm.getCurrentEpoch()).to.equal(0)
//         })
//         it('it should return 0 if no deposit in an epoch', async function () {
//             await moveAtEpoch(6)
//             await yieldFarm.connect(user).harvest(1)
//             expect(await rewardToken.balanceOf(await user.getAddress())).to.equal(0)
//         })
//         it('it should be epoch1 when staking epoch is 5', async function () {
//             await moveAtEpoch(5)
//             expect(await staking.getCurrentEpoch()).to.equal(5)
//             expect(await yieldFarm.getCurrentEpoch()).to.equal(1)
//         })
//     })
//
//     describe('Events', function () {
//         it('Harvest emits Harvest', async function () {
//             await depositToken(amount)
//             await moveAtEpoch(9)
//
//             await expect(yieldFarm.connect(user).harvest(1))
//                 .to.emit(yieldFarm, 'Harvest')
//         })
//
//         it('MassHarvest emits MassHarvest', async function () {
//             await depositToken(amount)
//             await moveAtEpoch(9)
//
//             await expect(yieldFarm.connect(user).massHarvest())
//                 .to.emit(yieldFarm, 'MassHarvest')
//         })
//     })
//
    function getCurrentUnix() {
        return Math.floor(Date.now() / 1000);
    }

    async function setNextBlockTimestamp(timestamp) {
        const block = await ethers.provider.send("eth_getBlockByNumber", ["latest", false]);
        const currentTs = block.timestamp;
        const diff = timestamp - currentTs;
        await ethers.provider.send("evm_increaseTime", [diff]);
    }

    async function moveAtEpoch(epoch) {
        await setNextBlockTimestamp(getCurrentUnix() + epochDuration * epoch);
        await ethers.provider.send("evm_mine", []);
    }

    async function depositToken(x, u = user) {
        const ua = await u.getAddress();
        await poolToken.mint(ua, x);
        await poolToken.connect(u).approve(staking.address, x);
        return await staking.connect(u).deposit(poolToken.address, x);
    }
});
