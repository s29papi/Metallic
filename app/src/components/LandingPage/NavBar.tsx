export default function NavBar() {
    return (
      <nav className="
                
                relative
                flex
                text-black 
                py-4
                z-50
              ">
                <div className="
                            container
                            mx-auto
                            flex
                            justify-between
                            items-center
                          ">
                          <a href="/"
                             className="
                                    text-xl
                                    font-bold
                                    tracking-wide
                             "
                          >
                             🎰 Metallic
                          </a>
                          <a href="/app"  className="
                                        flex 
                                        justify-center 
                                        border 
                                        border-black 
                                        rounded-full
                                        "
                                      >
                            <div className="
                                        p-2 
                                        pl-4 
                                        pr-4 
                                        font-bold 
                                        text-sm
                                        "
                                      >
                                        Launch App
                            </div>
                          </a>
                </div>
                  
      </nav>
    )
  }