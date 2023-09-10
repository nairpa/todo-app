
export type CheckButtonProps  = {
    checked?: boolean;
    onClick?: () => void;
}
export const CheckButton = ({ checked, onClick } : CheckButtonProps) => {
    return (
        <div className="relative">
            <input className="opacity-0 absolute" type="checkbox" checked onClick={onClick}></input>
            <span className={`${checked ? 'bg-gradient' : 'bg-darker-blue-gray'} rounded-full p-1 hover:bg-gradient flex items-center justify-center w-[26px] h-[26px]`}>
                <span className={`${checked ? 'bg-gradient p-1' : 'bg-dark-desat-blue p-3'} rounded-full flex items-center jutify-center h-full w-full ease-in-out duration-200 cursor-pointer`}>
                    <img className={`${checked ? 'max-w-[fit-content]' : ''}`} src="/icon-check.svg"></img>
                </span>
            </span>
        </div>
    )
}