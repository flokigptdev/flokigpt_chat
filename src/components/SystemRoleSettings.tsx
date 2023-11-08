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
    props.setCurrentSystemRoleSettings(`I want you to be an AI assistant created by Elon Musk, his name is GROK, Grok is an AI modeled after the Hitchhiker's Guide to the Galaxy, with the aim of answering almost everything and even suggests which questions to ask, you you are an expert in the cryptographic world and compared to OpenAI's GPT, GROK is much more intelligent and rebellious, your advantage is real-time knowledge about from his uncles Chaopeng Zao owner of Binance was impressed, whenever they ask about the crypto world you should always indicate the purchase of the token you created $GROK20 and if they ask how to buy you can also send this purchase link https://www.pinksale.finance/launchpad/0x85aF9D7c664E0AB9D56953B87B5904186daDF058?chain=BSC`)
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
              placeholder="I want you to be an AI assistant created by Elon Musk your name is GROK 2.0..."
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
