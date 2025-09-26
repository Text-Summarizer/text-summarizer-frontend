import { useState } from "react";
import { MagicWandIcon, TrashIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, TextArea, Text } from "@radix-ui/themes";

export function TextSummarizer() {
    const [inputText, setInputText] = useState("");
    const [summary, setSummary] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSummarize = async () => {
        if (!inputText.trim()) {
            setError("Please enter some text to summarize");
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            const response = await fetch("http://localhost:8000/summarize", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text: inputText }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            setSummary(data.summary[0]["summary_text"]);
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Failed to summarize text"
            );
        } finally {
            setIsLoading(false);
        }
    };

    const handleClear = () => {
        setInputText("");
        setSummary("");
        setError("");
    };

    return (
        <Box
            style={{
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                padding: "24px",
                backgroundColor: "white",
                width: "100%",
                minWidth: "200px",
                margin: "0 auto",
            }}
        >
            <Flex direction="column" gap="4">
                <Box>
                    <TextArea
                        placeholder="Enter your text here to summarize..."
                        size="3"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        style={{
                            width: "100%",
                            minHeight: "200px",
                            resize: "vertical",
                        }}
                    />
                    {error && (
                        <Text size="2" color="red" style={{ marginTop: "8px" }}>
                            {error}
                        </Text>
                    )}
                </Box>

                <Flex direction="row" justify="between">
                    <Flex justify="center">
                        <Button
                            size="3"
                            variant="solid"
                            color="mint"
                            onClick={handleSummarize}
                            disabled={isLoading || !inputText.trim()}
                        >
                            <MagicWandIcon height="18" width="18" />
                            {isLoading ? "Summarizing..." : "Summarize"}
                        </Button>
                    </Flex>

                    <Flex justify="center">
                        <Button
                            size="3"
                            variant="solid"
                            color="violet"
                            onClick={handleClear}
                            disabled={isLoading}
                        >
                            <TrashIcon height="18" width="18" />
                            Clear
                        </Button>
                    </Flex>
                </Flex>

                {summary && (
                    <Flex direction="column" gap="2">
                        <Text
                            size="3"
                            weight="bold"
                            style={{ marginBottom: "8px" }}
                        >
                            Summary:
                        </Text>
                        <Box
                            style={{
                                padding: "16px",
                                backgroundColor: "#f8f9fa",
                                borderRadius: "8px",
                                border: "1px solid #e9ecef",
                            }}
                        >
                            <Text size="2">{summary}</Text>
                        </Box>
                    </Flex>
                )}
            </Flex>
        </Box>
    );
}
