import { Program, web3 } from '@project-serum/anchor'
import useStaking from './useStaking'
import { Staking, IDL } from '@/programs/types/staking'
import { useAnchorWallet, useConnection, useWallet } from '@solana/wallet-adapter-react'
import { useEffect } from 'react'
import { setProgram } from '@/programs/staking/instructions'

export const STAKING_PROGRAM_ID = "9wrhaWSXB5PaSA9txTJEYicmkACzNmU7xaD1A9kWZNJ4"
export const STAKING_PROGRAM_PUBKEY = new web3.PublicKey("9wrhaWSXB5PaSA9txTJEYicmkACzNmU7xaD1A9kWZNJ4")

export default function useStakingInitializer() {
  const { connection } = useConnection()
  const { connected: walletConnected } = useWallet()
  const adapter = useAnchorWallet()
  useEffect(() => {
    const program = new Program<Staking>(IDL, STAKING_PROGRAM_ID, { connection })
    useStaking.setState({ program: program })
    setProgram(program)
  }, [connection, walletConnected])


  useStaking.setState({ adapter: adapter })
}
