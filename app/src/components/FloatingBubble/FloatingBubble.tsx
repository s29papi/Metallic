


export const BubblesArray = [
    { color: 'bg-[#EBAEEA]', delay: 0, size: '120px', left: 2, text: "👧 Send 100 USDC", w: '180px', h: "39px" },  
    { color: 'bg-[#FFA07A]', delay: 0.3, size: '140px', left: 33, text: "👦 Stream 50 DEGENx", w: '208px', h: "37px", fontSize: 'text-base' },  
    { color: 'bg-[#FFB6C1]', delay: 1.4, size: '100px', left: 17, text: "👦🏿 Send 0.01 WETH", w: '160px', h: "37px", fontSize: 'text-sm'  },  
    { color: 'bg-[#FFA07A]', delay: 1.6, size: '140px', left: 51, text: "👦 Stream 150 HIGHERx", w: '208px', h: "37px", fontSize: 'text-base' },  
    { color: 'bg-[#D8BFD8]', delay: 1.2, size: '130px', left: 71, text: "👦🏼 Stream 1 ETHx", w: '160px', h: "37px", fontSize: 'text-sm' }, 
    { color: 'bg-[#D8BFD8]', delay: 0.000009, size: '130px', left: 84, text: "👧🏾 Stream 1 USDC", w: '160px', h: "37px", fontSize: 'text-sm' }, 
    { color: 'bg-[#FFA07A]', delay: 5.7, size: '140px', left: 51, text: "👦 Stream 150 HIGHERx", w: '208px', h: "37px", fontSize: 'text-base' }, 
    { color: 'bg-[#EBAEEA]', delay: 6.4, size: '120px', left: 2, text: "👧 Send 100 USDC", w: '180px', h: "39px" }, 
    { color: 'bg-[#D8BFD8]', delay: 6.7, size: '130px', left: 84, text: "👧🏾 Stream 1 USDC", w: '160px', h: "37px", fontSize: 'text-sm' }, 
    { color: 'bg-[#D8BFD8]', delay: 7.8, size: '130px', left: 71, text: "👦🏼 Stream 1 ETHx", w: '160px', h: "37px", fontSize: 'text-sm' }, 
    { color: 'bg-[#FFA07A]', delay: 7.4, size: '140px', left: 33, text: "👦 Stream 50 DEGENx", w: '208px', h: "37px", fontSize: 'text-base' }, 
    { color: 'bg-[#FFB6C1]', delay: 5.2, size: '100px', left: 17, text: "👦🏿 Send 0.01 WETH", w: '160px', h: "37px", fontSize: 'text-sm'  },   
];

const FloatingBubble = ({ color, delay, size, left, w, h, text, fontSize }: any) => (
    <div 
      className={`absolute ${color} rounded-[18px] opacity-70 animate-float p-2 ${fontSize} text-gray-500`}
      style={{ 
        animationDelay: `${delay}s`,
        width: w,
        height: h,
        left: `${left}%`,
        bottom: `-${size}`,  // Start below the viewport
        zIndex: 10
      }}
    >{text}</div>
  );

export default FloatingBubble;