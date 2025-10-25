/**
 * Hotel View Role Enum
 */
export enum Role {  
    GENERALMANAGER = "generalManager",  
    HOTELDIRECTOR = "hotelDirector",  
    OWNER = "owner",  
    OTHERROLE = "otherRole",  
}  

/**
 *  Hotel View Form data Base interface
 */
export interface FormDataBase {
    hotelName: string;
    name: string;
    emailAddress: string;
    street: string;
    number: string;
    postalCode: string;
    city: string;
    country: string;
    phoneNumber: string;
    email: string;
    websiteUrl: string;
    bookingLink: string;
    hornsteinRanking: boolean;
    fairJobHotel: boolean;
    fact1: string;
    fact2: string;
    fact3: string;
    fact4: string;
    fact5: string;
    aboutText: string;
    highlight1: boolean;
    highlight2: boolean;
    highlight3: boolean;
    highlight4: boolean;
    highlight5: boolean;
    highlight6: boolean;
    addOtherHighlights: boolean;
    customHighlights: string[];
    imageCopyrightAgreed: boolean;
    plaketteChecked: boolean;
    plaketteWording: string;
    plaketteSize: string;
    flagChecked: boolean;
    flagFormat: string;
    flagAttachment: string;
}

/**
 * Hotel View Form data Premium interface
 */
export interface FormDataPremium {
    hotelName: string;
    name: string;
    emailAddress: string; 
    street: string;
    number: string;
    postalCode: string;
    city: string;
    country: string;
    phoneNumber: string;
    email: string;
    websiteUrl: string;
    bookingLink: string;  
    hornsteinRanking: boolean;
    fairJobHotel: boolean;
    fact1: string;
    fact2: string;
    fact3: string;
    fact4: string;
    fact5: string;
    aboutText: string;
    hotelInfoText: string;
    highlight1: boolean;
    highlight2: boolean;
    highlight3: boolean;
    highlight4: boolean;
    highlight5: boolean;
    highlight6: boolean;
    managerName: string;
    role: string;
    addOtherHighlights: boolean;
    customHighlights: string[];
    imageCopyrightAgreed: boolean;
    plaketteChecked: boolean;
    plaketteWording: string;
    plaketteSize: string;
    flagChecked: boolean;
    flagFormat: string;
    flagAttachment: string;
}

/**
 * Hotel View Form data Exclusive interface
 */
export interface FormDataExclusive {
    hotelName: string;
    name: string;
    emailAddress: string; 
    street: string;
    number: string;
    postalCode: string;
    city: string;
    country: string;
    phoneNumber: string;
    email: string;
    websiteUrl: string;
    bookingLink: string;  
    hornsteinRanking: boolean;
    fairJobHotel: boolean;
    fact1: string;
    fact2: string;
    fact3: string;
    fact4: string;
    fact5: string;
    aboutText: string;
    hotelInfoText: string;
    highlight1: boolean;
    highlight2: boolean;
    highlight3: boolean;
    highlight4: boolean;
    highlight5: boolean;
    highlight6: boolean;
    manageQuoteText: string;
    manageNameOrRole: string;
    managerName: string;
    role: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    answer5: string;
    addOtherHighlights: boolean;
    customHighlights: string[];
    imageCopyrightAgreed: boolean;
    plaketteChecked: boolean;
    plaketteWording: string;
    plaketteSize: string;
    flagChecked: boolean;
    flagFormat: string;
    flagAttachment: string;
}

export interface FormDataGrand {
    hotelName: string;
    name: string;
    emailAddress: string; 
    street: string;
    number: string;
    postalCode: string;
    city: string;
    country: string;
    phoneNumber: string;
    email: string;
    websiteUrl: string;
    bookingLink: string;  
    hornsteinRanking: boolean;
    fairJobHotel: boolean;
    fact1: string;
    fact2: string;
    fact3: string;
    fact4: string;
    fact5: string;
    aboutText: string;
    hotelInfoText: string;
    highlight1: boolean;
    highlight2: boolean;
    highlight3: boolean;
    highlight4: boolean;
    highlight5: boolean;
    highlight6: boolean;
    manageQuoteText: string;
    manageNameOrRole: string;
    managerName: string;
    quoteManagerRole: string;
    quoteOtherManagerRole: string;
    interviewManagerRole: string;
    interviewOtherManagerRole: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    answer5: string;
    answer6: string;
    addOtherHighlights: boolean;
    customHighlights: string[];
    imageCopyrightAgreed: boolean;
    plaketteChecked: boolean;
    plaketteWording: string;
    plaketteSize: string;
    flagChecked: boolean;
    flagFormat: string;
    flagAttachment: string;
}