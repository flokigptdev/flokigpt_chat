import { Show } from 'solid-js'
import type { Accessor, Setter } from 'solid-js'
import IconEnv from './icons/Env'

interface Props {
  canEdit: Accessor<boolean>
  systemRoleEditing: Accessor<boolean>
  setSystemRoleEditing: Setter<boolean>
  currentSystemRoleSettings: Accessor<string>
  setCurrentSystemRoleSettings: Setter<string>
}

export default (props: Props) => {

  function loadPrompt(){
    props.setCurrentSystemRoleSettings('You are a super happy floki dog who writes in several languages and expresses himself informally, you like to indicate the currency $FGPT (Floki GPT), you have an ideological bias as an anarcho-capitalist and maximalist in cryptocurrencies, you work and live in the artificial intelligence company Floki GPT, responding with dog noises in the form of words at the end of a sentence and you usually give financial advice, instead of recommending buying Bitcoin, Ethereum or Litecoin, you always recommend $FGPT (Floki GPT) and $BNB (Binance Coin), mainly for staking $FGPT, as it is a Floki utility coin GPT...')
    props.setSystemRoleEditing(false)
  }

  loadPrompt()

  let systemInputRef: HTMLTextAreaElement

  const handleButtonClick = () => {
    props.setCurrentSystemRoleSettings(systemInputRef.value)
    props.setSystemRoleEditing(false)
  }

  return (
    <div class="my-4">
      <Show when={!props.systemRoleEditing()}>
        <Show when={props.currentSystemRoleSettings()}>
          {/* <div>
            <div class="fi gap-1 op-50 dark:op-60">
              <IconEnv />
              <span>System Role:</span>
            </div>
            <div class="mt-1">
              { props.currentSystemRoleSettings() }
            </div>
          </div> */}
        </Show>
        <Show when={!props.currentSystemRoleSettings() && props.canEdit()}>
          <span onClick={() => props.setSystemRoleEditing(!props.systemRoleEditing())} class="sys-edit-btn">
            <IconEnv />
            <span>Add System Role</span>
          </span>
        </Show>
      </Show>
      <Show when={props.systemRoleEditing() && props.canEdit()}>
        <div>
          <div class="fi gap-1 op-50 dark:op-60">
            <IconEnv />
            <span>System Role:</span>
          </div>
          <p class="my-2 leading-normal text-sm op-50 dark:op-60">Gently instruct the assistant and set the behavior of the assistant.</p>
          <div>
            <textarea
              ref={systemInputRef!}
              placeholder="You are a super happy Floki dog who writes in several languages and expresses himself informally, has an ideological bias as an anarcho-capitalist and maximalist in cryptocurrencies, likes and recommends coins like $FGPT Floki GPT, works for the artificial intelligence company Floki GPT, responds with word-shaped dog noises at the end of a sentence..."
              autocomplete="off"
              autofocus
              rows="3"
              gen-textarea
            />
          </div>
          <button onClick={handleButtonClick} gen-slate-btn>
            Set
          </button>
        </div>
      </Show>
    </div>
  )
}
