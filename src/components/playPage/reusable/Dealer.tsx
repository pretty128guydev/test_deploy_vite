function Dealer() {
    return (
        <div className="z-[110] rounded-full p-[2px] shadow-[0_1px_1px_rgba(0,0,0,0.25)] bg-gradient-to-br from-[#FAFAFA] to-[#B8B8B8] w-[25px] h-[25px]">
            <div className="flex items-center justify-center bg-gradient-to-t from-[#FAFAFA] to-[#B8B8B8] rounded-full h-full w-full">
                <img src={`/cards/dealer.svg`}
                    alt="Dealer button" className="absolute w-[15px] h-[auto]" />
            </div>
        </div>
    );
}

export default Dealer;
