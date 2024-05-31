import NavButton from "@/components/buttons/NavButton";
import Checkbox from "@/components/Checkbox";

export default function Home() {
    
    return (
      <main className="flex flex-col items-center justify-between">
        <h1 className="text-center mb-3">Informed Consent of Study Participation</h1>
            <div className="px-5 flex justify-center">
                <div className="task-box mb-3 max-w-prose place-items-center px-5 border border-neutral-900">
                    <p>
                    You are invited to participate in the online study, which investigates information gathering for the EU elections on 9 June 2024. 
                    The study is conducted by Felix Hornberger and supervised by Dr. David Elsweiler from the University of Regensburg. 
                    The study will take place in the period from 2024-05-25 to 2024-06-08. Please note:
                    </p>
                    <p className="my-2">Please note:</p>
                    <div className="text-left">
                        <ul className="mb-2">
                            <li>- Your participation is entirely voluntary and can be discontinued or withdrawn at any time</li>
                            <li>- You have no direct benefit from participating in the study (unless you receive 0.25 VP hours as a student
                                of the University of Regensburg), but you support our work and help to advance research in this area.</li>
                            <li>- For the evaluation, we collect some basic demographic personal information (e.g., age, gender, etc.)</li>
                            <li>- During the course of the session, all inquiries and corresponding responses entered into the system will
                                be meticulously documented, inclusive of timestamp data.</li>
                            <li>- Recordings and personal data are subject to the guidelines of the General Data Protection Regulation
                                (GDPR) and will pseudoanonymized (with a coded number) stored, evaluated, and potentially published
                                so that without information from the researchers no conclusions can be drawn about individual persons</li>
                        </ul>
                        <p className="font-normal">The alternative to participation in this study is to choose not to participate. If you have any questions,
                            concerns, or complaints about the informed consent process of this research study or your rights as a
                            human research subject, please contact Dr. David Elsweiler. Please read the following information
                            carefully and take the time you need.</p>
                        <h2 className="text-center my-2">1. Purpose and Goal of this Research</h2>
                        <p className="font-normal">
                            The purpose of this research is to investigate how Generative Information Retrieval systems can be used for information gathering om elections. 
                            The goal of this study is to analyze how the Generative Information Retrieval systems and their answers provided affect users&apos; perspectives and engagement on a party and their manifesto for the EU elections on 9 June 2024. Your participation will help us achieve this research goal. 
                            The results of this research may be presented at scientific or professional meetings or published in scientific proceedings and journals.</p>
                        <h2 className="text-center my-2">2. Study Participation</h2>
                        <p className="font-normal">Your participation in this online study is entirely voluntary and can be discontinued or withdrawn at any
                            time. You can refuse to answer any questions or continue with the study at any time if you feel
                            uncomfortable in any way. You can discontinue or withdraw your participation at any time without giving
                            a reason. However, we reserve the right to exclude you from the study (e.g. in the case of invalid
                            attempts or if continuing the study could have a negative impact on your well-being or the equipment).
                            You will receive the offered compensation even if you discontinue the study. Repeated participation in
                            the study is not permitted.</p>
                        <h2 className="text-center my-2">3. Study Procedure</h2>
                        <p className="font-normal my-2">After confirming this informed consent, the procedure is as follows:</p>
                        <ul className="mb-2">
                            <li>1. You will be initially provided with a brief introduction to the study. After this, you will complete the informed
                                    consent process.</li>
                            <li>2. You are now quized about EU elections and the European Parliament.</li>
                            <li>3. You are now asked to select the party you want to know more about and then you have to indicate how likely you are to vote for it. </li>
                            <li>4. Now you either interact with a website on which the party programme has been posted or you are presented with a chat window with either a proactive chatbot 
                                ([Claude 3 Haiku] which always adds at the end of a message that it knows even more about the party programme) or a passive chatbot (Claude 3 Haiku).
                                Your conversation with the chatbot will be forwarded to third-party
                                providers. Therefore, do not disclose any personal data in the chat and do not share any information
                                that you would not discuss with other people. Only chat data will be shared with third party providers.
                                Other data, such as demographics data, will not be shared outside the research team.</li>
                            <li>5. After completing the task, you will be presented with a short questionnaire to determine how likely it is that you will vote in favour of this party. 
                                You will also be asked what new things you have learned about the election programme.</li>
                            <li>6. You are now survey abdout your personal data (age, gender, level of education, occupation, political view point and if you like to read or chat more about a topic)</li>

                        </ul>
                        <p className="font-normal my-2">The confirmation of participation in this study can be obtained directly from the researchers.</p>
                        <h2 className="text-center my-2">4. Risks and Benefits</h2>
                        <p className="font-normal">In the online study, you will not be exposed to any immediate risk or danger. As with all computer systems on
                            which data is processed, despite security measures, there is a small risk of data leakage and the loss of
                            confidential or personal information. You have no direct benefit from participating in the study (unless you
                            receive 0.25 VP hours as a student of the University of Regensburg), but you support our work and help us to
                            advance research in this area.</p>
                        <h2 className="text-center my-2">5. Data Protection and Confidentiality</h2>
                        <p className="font-normal">In this study, personal and personally identifiable information is collected for our research. The use of personal or
                            personally identifiable data is subject to the General Data Protection Regulation (GDPR) of the European Union
                            (EU) and will be handled in accordance with the GDPR. This means that you can view, correct, restrict the
                            processing of and have deleted the data collected in this study. Your entries will only be registered in the study
                            with your consent. We plan to publish the results of this and other research studies in scientific articles or other
                            media. Your data will be kept until you contact the researchers to have your data destroyed or deleted. Access to
                            the raw data of the study will be encrypted, password protected during the analysis and only for the authors,
                            colleagues and researchers collaborating on this research. As part of the research work, the data is anonymised
                            using coded identification numbers and then made available to the public, whereby no conclusions can be drawn
                            about individual persons without the researchers&apos; information. Once the material is publicly available, the
                            dissemination of the data can no longer be revoked. As no contact details (e.g. emails) are collected, the
                            researchers cannot inform the participants about further details of the study or about a possible breach of
                            confidential data.</p>
                        <h2 className="text-center my-2">6. Identification of Investigators</h2>
                        <p className="font-normal mb-2">If you have any questions or concerns about the research, please feel free to contact:</p>
                        <p className="font-normal">Researcher:</p>
                        <ul className="mb-2">
                            <li>Felix Hornberger (felix.hornberger@stud.uni-regensburg.de)</li>
                        </ul>
                        <p className="font-normal">Principal investigator:</p>
                        <ul className="mb-2">
                            <li>Dr. David Elsweiler (david.elsweiler@ur.de)</li>
                            <li>University of Regensburg Universitätsstr. 31 93053 Regensburg, Germany</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Checkbox checkboxText="I accept the conditions"/>
      </main>
    );
  }
  