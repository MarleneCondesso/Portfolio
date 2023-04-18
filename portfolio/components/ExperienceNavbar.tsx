import DropdownButtonComponent from './DropdownButton';
const ExperienceNavbar = () => {

    return(
        
            <div className="flex flex-col gap-10 items-center justify-center bg-slate-300">
                <nav className="flex flex-col">
                    {/* <DropdownButton  id="ola" title={"Other jobs"}>
                            <Dropdown.Item>
                                UPN
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Bombeiros Voluntário de Fão
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Esposende2000
                            </Dropdown.Item>
                            <Dropdown.Item>
                                FM Têxteis S.A
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Dolores Hipólito, Unipessoal, LDA
                            </Dropdown.Item>
                    </DropdownButton> */}
                    <DropdownButtonComponent />
                </nav>
                <div id="upn"className="bg-slate-200">
                    
                </div>
            </div>
    );
}

export default ExperienceNavbar;