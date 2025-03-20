
// Interfaces para tipar os dados

import { useQuery } from "@tanstack/react-query";
import { getGroupMessages } from "../services/messageService";
import { GroupMessage } from "../models/GroupMessage";
import { useCallback, useMemo, useState } from "react";
import Message from "../components/message";



export const Messages = () => {

    const [selectedMessage, setSelectedMessage] = useState<GroupMessage | undefined>(undefined);

    const getLastMessagesQuery = useQuery({
        queryKey: ["GroupMessages"],
        queryFn: getGroupMessages,
    });



    return (

        <div className="main-content app-content">
            <div className="container-fluid">

                <h1 className="mt-4">Mensagens</h1>

                <div className="row">
                    <div className="col-6">
                        <h2>Conversas</h2>
                        <div>
                            {getLastMessagesQuery.data?.map((group, idx) => (
                                <button
                                    key={idx}
                                    className="btn btn-primary mb-2"
                                    onClick={() => setSelectedMessage(group)}
                                >
                                    {group.conversationId}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="col-6">
                        <h2>Chat</h2>
                        <div>
                            <Message group={selectedMessage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;