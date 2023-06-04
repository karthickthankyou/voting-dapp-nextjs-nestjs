import { Contract } from 'web3-eth-contract'

export type ActionType = {
  contract: Contract
  account: string
  name: string
}

export async function createPersonality({
  contract,
  account,
  name,
}: ActionType): Promise<void> {
  try {
    // Check if the personality exists using call
    const personality = await contract.methods.personalities(name).call()

    // Check the length of the personality name to verify its existence
    if (personality.name) {
      alert('Personality already exists!')
      return
    }

    // If the personality doesn't exist, then create it using send
    await contract.methods.createPersonality(name).send({ from: account })
  } catch (error) {
    console.error(error)
  }
}

export async function upvote({
  contract,
  account,
  name,
}: ActionType): Promise<void> {
  try {
    const currentVote = await contract.methods.votes(account, name).call()
    if (currentVote === '1') {
      alert('You have already upvoted this personality')
    } else {
      await contract.methods.upvote(name).send({ from: account })
    }
  } catch (err) {
    console.error(err)
  }
}

export async function downvote({
  contract,
  account,
  name,
}: ActionType): Promise<void> {
  try {
    const currentVote = await contract.methods.votes(account, name).call()
    if (currentVote === '-1') {
      alert('You have already downvoted this personality')
    } else {
      await contract.methods.downvote(name).send({ from: account })
    }
  } catch (err) {
    console.error(err)
  }
}

export async function removePersonality({
  contract,
  account,
  name,
}: ActionType): Promise<void> {
  try {
    // First check if the account requesting is the owner of the contract
    const contractOwner = await contract.methods.owner().call()
    if (account !== contractOwner) {
      alert(
        'You are not the owner of the contract and cannot remove a personality!',
      )
      return
    }

    // If the requester is the owner, proceed with the removal
    await contract.methods.removePersonality(name).send({ from: account })
    alert('Personality successfully removed!')
  } catch (error) {
    console.error(error)
  }
}
